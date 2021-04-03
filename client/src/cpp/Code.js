
const Code =(props) =>{
    const { programName, programCode } = props;
   
    return (
        <div> 
            <h1>{programName}</h1>
            <section  id={programName} >
                <pre className='prettyprint lang-cpp'>
                {programCode}
                </pre>
            </section>
        </div>
    );
  }
  
  export default Code;
  