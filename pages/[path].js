import Router from 'next/router'
import { useEffect } from 'react';
import FormComponent from '../front/components/FormComponent';



export default function Page({ props}) {
   
  

  useEffect(() => {

    if(props?.error){      
      Router.push('/404');
    }
  
  }, [props])
  

 


  return (
    <>
    
    <div className='d-flex justify-content-center align-items-center form-content'>
      <FormComponent props={props} />
    </div>
    </>
  )


  

}


Page.getInitialProps = async (ctx) => {
  try {
    const res = await fetch(`http://localhost:3000/configuration/${ctx.query.path}`);
    const json = await res.json()
    return { props: json }  
  } catch (error) {
    return { props: error }  
  }
  
}

