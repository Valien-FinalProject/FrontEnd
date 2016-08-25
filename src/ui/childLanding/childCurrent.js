import React from 'react';
import {getCurrentChoresById, getPendingChoresById} from 'api/api'
import {connect} from 'react-redux'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton'
import Single from 'ui/childLanding/childcurrentsingle'

const bodyStyle={
  fontFamily:"Chalky",
  color:"white",
  fontSize:48

}
const bodyStyle2={
  fontFamily:"Chalky",
  color:"white",
  fontSize:48,
  width:"33%"

}
const bodyStyle3={
  fontFamily:"Chalky",
  color:"white",
  fontSize:48,
  width:"21%"

}


const CurrentChores =  React.createClass({
  getInitialState:function(){
    return {
      disabled:false
    }
  },
  componentWillMount:function(){
    getCurrentChoresById()
    getPendingChoresById()
  },
    render: function () {
    if(typeof this.props.value === 'undefined'){
      return (<div>hello</div>)
    }else{
    return (
        <Table style={bodyStyle}  className="tableLanding">
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow >
              <TableHeaderColumn style={{fontSize:52}}>Chore</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:52, width:"33%"}}>Description</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:52, width:"21%"}}>Points</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:52, width:"21%"}}>Complete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.current.map(function(chore){
             return <Single key={chore.id} id={chore.id} name={chore.name} description={chore.description} value={chore.value} />
            })}
            {this.props.pending.map(function(chore){
             return <Single key={chore.id} id={chore.id} name={chore.name} pending={"pending"}description={chore.description} value={chore.value} />
            })}
            
          </TableBody>
        </Table>
    )
  }
  } 
})


const stateToProps = function(state){
  console.log(state)
  return{
    current: state.choreReducer.current,
    pending:state.choreReducer.pending,
    value:state.childReducer.value
  }
}


export default connect(stateToProps)(CurrentChores)



  