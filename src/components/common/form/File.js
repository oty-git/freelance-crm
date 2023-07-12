import React, { useState } from "react";
import AddBtn from "../../account/settings/tabsBlocks/upload/AddBtn";
import { apiProvider } from "../../../api/utilities/api-provider";

const File = ({ name, value, multiple }) => {
  const [files, setFiles] = useState(
    (value && (Array.isArray(value) ? value : [value])) || [],
  );

  const saveFiles = (addFiles) => {
    let newFiles = [...files];
    for (let i = 0; i < addFiles.length; i++) {
      let file = addFiles.item(i);

      let url = URL.createObjectURL(file);

      newFiles.push(url);
    }
    setFiles(newFiles);
  };

  const deleteFile = (e, item) => {
    e.preventDefault();

    let newFiles = [...files];

    if (item.id) {
      apiProvider
        .remove("files", item.id)
        .then((res) => {})
        .catch((err) => console.log("err", err));
      newFiles = newFiles.filter((file) => item.id !== file.id);
    } else {
      newFiles = newFiles.filter((file) => item !== file);
    }
    setFiles(newFiles);
  };

  return (
    <div className={"input-animation js-input-animation upload__block "}>
      {/*<div className="form-group">*/}
      {/*    {(value && value.content_type && value.content_type.indexOf('image')!==-1)*/}
      {/*        ?*/}
      {/*        <img width={50} src={value ?( value.disk_name || value) : ''} alt=""/>*/}
      {/*        :*/}
      {/*        <a href={value ?( value.disk_name || value): ''}>{value ?( value.file_name || value): ''}</a>*/}
      {/*    }*/}
      {/*</div>*/}
      {/*<input type="file" name={name} className={"input input--border-alto"}/>*/}

      <AddBtn multiple={multiple} saveFiles={saveFiles} name={name} />

      {!!(files && files.length) && (
        <div className="service__file--loaded">
          {files.map((file, index) => (
            <div className="inner__loaded" key={index}>
              <div className="image__loaded">
                <img src={file.disk_name || file} alt="loadedimage" />
              </div>
              <a href="#" onClick={(e) => deleteFile(e, file)}>
                <img src="/images/trashicon.svg" alt="trashicon" />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default File;
