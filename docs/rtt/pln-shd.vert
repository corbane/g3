        
attribute vec3 a_vertex;
attribute vec2 a_texCoord;
uniform mat4 u_mvproj;
varying vec2 v_coord;

void main()
{
    v_coord = a_texCoord.xy;
    gl_Position = u_mvproj *  vec4 (a_vertex, 1.);
}
