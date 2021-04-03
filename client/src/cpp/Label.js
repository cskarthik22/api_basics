
const Label =(props) =>{
    const { webLinkName, webLink } = props;
    const flag = webLink.includes("https://")
    if (flag) {
        return (
            <div className="label-container label">
                <a href={webLink} class="navigation-link" target="_blank"> 
                    {webLinkName} 
                </a>
            </div>  
        );
    } else {
        return (
            <div className="label-container label">
                <a href={webLink} class="navigation-link"> 
                    {webLinkName} 
                </a>
            </div>  
        );
    }
    
  }
  export default Label;
  