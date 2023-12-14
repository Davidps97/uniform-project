import { Button } from "antd";
import { useRef } from "react";
import { createApplication } from "../../services/application.service";

function ApplicationForm({getApps}) {
  const appRef = useRef(null);
  const createApp = (e) => {
    e.preventDefault();
    console.log(appRef.current)
    createApplication(appRef.current.value).then(response => {
        getApps();
    });
    appRef.current.value = "";

  };

  return (
    <div>
      <form onSubmit={(e) => createApp(e)}>
        <input type="text" placeholder="Application Name" ref={appRef}/>
        <Button htmlType="submit">Create application</Button>
      </form>
    </div>
  );
}

export default ApplicationForm;
