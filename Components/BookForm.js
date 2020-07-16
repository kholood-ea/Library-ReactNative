import * as React from 'react'
import {Form,Item,Input,Label } from "native-base";

export const BookForm = () => {
    return(
       
          <Form>
            <Item floatingLabel>
              <Label>Book Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Book Auther</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Copies</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Max Copies</Label>
              <Input />
            </Item>
          </Form>
     
    )
}
