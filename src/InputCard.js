import * as React from 'react';
import Card from '@mui/material/Card';
import { Button, CardContent, Input } from '@mui/material';
import { toast } from 'react-toastify';


export default function InputCard() {


    return (
        <div style={{ minWidth: '450px', padding: ' 50px 0 ' }} >
            <Card >
                <CardContent>
                    <Input style={{ width: '100%' }} placeholder='Enter Text ' /><br />
                    <Button onClick={e => toast("App still In development mode...")} color='primary' variant='contained' className='mt-4' >Save</Button>
                </CardContent>
            </Card>
        </div>
    );
}
