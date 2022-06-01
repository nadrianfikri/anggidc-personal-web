import ReactQuill from 'react-quill';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  .ql-toolbar {
    background-color: #bcb8b150;
  }
  .ql-editor {
    background-color: #ffffff;
  }
`;

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({
  value,
  onChange,
  ...props
}: TextEditorProps) => {
  const modules = {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
        ],
        ['link', 'image'],
        ['clean'],
      ],
    },
    formats = [
      'header',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'list',
      'bullet',
      'indent',
      'link',
      'image',
    ];

  return (
    <Wrapper>
      <ReactQuill
        modules={modules}
        formats={formats}
        value={value}
        onChange={onChange}
        style={{ height: '500px' }}
        {...props}
      />
    </Wrapper>
  );
};

export default TextEditor;
