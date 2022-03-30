import React, {useState, useEffect} from 'react'
import { CreateTicketForm } from '../../components/create-form/CreateTicketForm'
import { PageBreadcrumbs } from '../../components/layout/Breadcrumbs'

const initialFrmDt = {
    subject:"",
    issueDate: "",
    details:"",
};
export const CreateTicket = () => {
  
    const [frmData, setFrmData] = useState(initialFrmDt);
    useEffect(() => {}, [frmData]);

  const handleOnChange = e => {
      const {name, value} = e.target;

      setFrmData({
        ...initialFrmDt, 
        [name]: value,
    });

  };
    return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <PageBreadcrumbs page='New Ticket' />
            </div>

        </div>
        <br />
        <div className='row'>
            <div className='col'>
                <CreateTicketForm handleOnChange={handleOnChange}
                    frmDt={setFrmData} />
            </div>

        </div>
        <div className='spacer2'></div>
    </div>
  )
}
