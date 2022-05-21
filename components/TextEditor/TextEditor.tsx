import ReactQuill from 'react-quill';

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
    <ReactQuill
      modules={modules}
      formats={formats}
      value={value}
      onChange={onChange}
      style={{ width: '1000px', height: '500px' }}
      {...props}
    />
  );
};

export default TextEditor;
