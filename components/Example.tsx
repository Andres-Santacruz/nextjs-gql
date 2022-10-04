import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { UPLOAD_FILES } from "../gql/mutations";

const Example = () => {
  const [uploadFile, { data, loading, error }] = useMutation(UPLOAD_FILES);
  const [filesUpload, setFilesUpload] = useState<FileList[]>([]);

  const handleFileChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const file = evt.target.files;
    if (file) setFilesUpload((prev) => prev.concat(file));
  };
  const handleUpload = () => {
    if (filesUpload.length > 0) {
      uploadFile({
        variables: {
          data: {
            files: filesUpload,
          },
        },
      });
    }
  };
  return (
    <>
      <div>
        <input type="file" onChange={handleFileChange} />
      </div>
      {loading && (
        <div>
          <span>Loading...</span>
        </div>
      )}
      <div>
        <button onClick={handleUpload}>Upload</button>
      </div>
    </>
  );
};

export default Example;
