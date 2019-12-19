import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(false);


    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
                setEditMode (false);

        props.updateStatus(status);
    };

    const onStatusChanged = (e) => {
   setStatus(e.currentTarget.value);
    };


    return (
        <div>
            {
                !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChanged} autoFocus={true} onBlur={deactivateEditMode}
                value={status}/>
            </div>
            }

        </div>
    )
};


export default ProfileStatusWithHooks;