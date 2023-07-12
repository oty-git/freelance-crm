import UploadBlock from "../../account/settings/tabsBlocks/upload/UploadBlock";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";

const FileUploadBlock = ({parentState,setParentState}) => {

    const [files,setFiles] = useState(false);

    const onSave=(savedFiles)=>{
        let newFiles = Array.isArray(files) ? [...files] : [];

        let newState = {...parentState};

        savedFiles = [...savedFiles];
        for(let file of savedFiles){
            newFiles.push({
                file_name:file.name,
                data: file,
                name: file.name
            })
        }
        setFiles([...newFiles]);

        newState.files =newFiles;
        setParentState(newState);

    };

    const onDelete=(file)=>{
        let newState = {...parentState};
        let newFiles = [...files];
        newFiles = newFiles.filter(item=>item.file_name!==file.name);




        newState.files =newFiles;


        setParentState(newState);
        setFiles([...newFiles]);

    };
    const {t} = useTranslation();

    return <div className="application-form__item">
        <div className="application-form__card">
            <div className="application-form__card-line">
                <div className="column-group column-group--sm">
                    <div className="column-group__item">
                        <p className="font-semibold">{t("Documents:")}</p>
                    </div>
                    <div className="column-group__item">
                        <p>
                            - {t("Attach your Diplomas if avaliable")}<br/>
                            - {t("Attach your CV")}<br/>
                            - {t("Attach your document with that you can issue the invoice")}
                        </p>
                    </div>
                </div>
            </div>
            <div className="application-form__card-line">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <UploadBlock showUpload={true} onSave={onSave} onDelete={onDelete} currentFiles={files}/>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default FileUploadBlock;
