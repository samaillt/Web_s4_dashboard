import { h } from 'hyperapp'

export default (props) => (
    <iframe 
      src={props.selectedClip.embed_url}
      width='640'
      height='360'
      frameborder='0'
      scrolling='no'
      allowfullscreen='true'>
    </iframe>
);