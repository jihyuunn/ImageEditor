import React from 'react';
import './App.css';
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';

function App() {
  return (
    <div className="App">
      <ImageEditor 
        includeUI={{
          loadImage: {
            path:'public/ex.png',
            name: 'sample'
          },
          menu: ['shape', 'filter'],
          initMenu: 'filter',
          uiSize: {
            width: '1000px',
            height: '700px'
          },
          menuBarPosition: 'bottom'
        }}
        cssMaxHeight={500}
        cssMaxWidth={700}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70
        }}
        />
    </div>
  );
}

export default App;
