import { StatusBar } from "@capacitor/status-bar";
import { useEffect } from "react";
import '../theme/variables.css'; // Import the global CSS file

const useToolbarColor = () => {

    useEffect(()=>{
        updateStatusBarColor();
    },[]);
  
    const updateStatusBarColor = () => {
      const color = getToolbarColor();
      StatusBar.setBackgroundColor({color: color});
      console.log(color);
    };
  
    const getToolbarColor = (): any => {
      const toolbar = document.querySelector('ion-toolbar') as HTMLIonToolbarElement;
      if (toolbar) {
        const backgroundColor = toolbar?.color;
        return backgroundColor;
      }
      return '';
    };
  
    return {updateStatusBarColor};
  };

  export default useToolbarColor;
  