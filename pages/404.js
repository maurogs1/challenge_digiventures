import { Button } from "reactstrap";
export default function PageNotFound () {


    return <div className="not_found">
        <h1>Page not found</h1>
        <Button color="success" onClick={()=>{
                      window.open('/', '_self');
        }} > Inicio </Button>
    </div>

}