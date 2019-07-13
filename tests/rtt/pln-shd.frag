

precision highp float;

uniform sampler2D texture;
uniform sampler2D overlay;
varying vec2 v_coord;

void main()
{
    gl_FragColor = (texture2D (overlay, v_coord) + texture2D (texture, v_coord)) / 2.0;
}
