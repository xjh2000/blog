import MdEditor from 'md-editor-v3';

MdEditor.config({
  markedRenderer(renderer) {
    renderer.heading = (text, level, raw, s, index) => {
      return `<h${level} id="heading-${index}">${text}</h${level}>`;
    };
    return renderer;
  }
});