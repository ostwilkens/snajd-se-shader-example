module Main exposing (main)

import Browser
import Browser.Dom
import Browser.Events exposing (onAnimationFrameDelta)
import Html exposing (Html)
import Html.Attributes exposing (style)
import Html.Events.Extra.Mouse as Mouse
import Json.Decode exposing (Value)
import Json.Encode as Encode
import List exposing (any, filter, head, map, repeat)
import Math.Matrix4 as Mat4 exposing (Mat4)
import Math.Vector2 as Vector2 exposing (vec2)
import Math.Vector3 as Vec3 exposing (Vec3, vec3)
import Shader exposing (Vertex, fragmentShader, vertexShader)
import Task
import WebGL exposing (Mesh, Shader)


main : Program (Maybe Encode.Value) Model Msg
main =
    Browser.element
        { init = \_ -> init
        , view = view
        , subscriptions = subscriptions
        , update = update
        }


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.batch
        [ Browser.Events.onAnimationFrameDelta TimeDelta
        , Browser.Events.onResize (\w h -> ResizeWindow ( toFloat w, toFloat h ))
        ]


view : Model -> Html Msg
view model =
    Html.div
        [ style "position" "absolute"
        , style "pointer-events" "none"
        , style "width" "100%"
        , style "height" "100%"
        , style "top" "0"
        , Mouse.onMove (\event -> Move event.offsetPos)
        ]
        [ glView model ]


glView : Model -> Html Msg
glView model =
    WebGL.toHtml
        [ style "height" "100%"
        , style "width" "100%"
        , Html.Attributes.height 2000
        , Html.Attributes.width 1300
        ]
        [ WebGL.entity vertexShader
            fragmentShader
            mesh
            { time = model.time / 1000
            , speed = model.speed
            , resolution = vec2 (Tuple.first model.resolution) (Tuple.second model.resolution)
            , xPos = model.xPos
            , targetXPos = model.targetXPos
            , distance = model.distance
            }
        ]


type alias Model =
    { time : Float
    , speed : Float
    , distance : Float
    , xPos : Float
    , targetXPos : Float
    , resolution : ( Float, Float )
    }


init : ( Model, Cmd Msg )
init =
    ( { time = 0
      , speed = 0
      , distance = 0
      , xPos = 0
      , targetXPos = 0
      , resolution = ( 1, 1 )
      }
    , Task.perform InitWindowSize Browser.Dom.getViewport
    )


type Msg
    = TimeDelta Float
    | Move ( Float, Float )
    | ResizeWindow ( Float, Float )
    | InitWindowSize Browser.Dom.Viewport


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        TimeDelta delta ->
            ( { model
                | time = model.time + delta
                , speed = model.speed + delta * 0.05
                , distance = model.distance + model.speed * 0.0001
                , xPos = model.xPos * 0.9 + model.targetXPos * 0.1
              }
            , Cmd.none
            )

        Move ( x, y ) ->
            ( { model
                | targetXPos = ((x / Tuple.first model.resolution) - 0.5) * 2
              }
            , Cmd.none
            )

        ResizeWindow ( x, y ) ->
            ( { model | resolution = ( x, y ) }
            , Cmd.none
            )

        InitWindowSize viewport ->
            ( { model | resolution = ( viewport.viewport.width, viewport.viewport.height ) }
            , Cmd.none
            )


mesh : WebGL.Mesh Vertex
mesh =
    WebGL.triangles
        [ ( Vertex (vec3 -1 1 0)
          , Vertex (vec3 1 1 0)
          , Vertex (vec3 -1 -1 0)
          )
        , ( Vertex (vec3 -1 -1 0)
          , Vertex (vec3 1 1 0)
          , Vertex (vec3 1 -1 0)
          )
        ]
