import React from 'react';
import {connect} from 'react-redux'
import Single from 'ui/landing/singleView'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const bodyStyle={
  fontFamily:"Chalky",
  color:"white",
  fontSize:46

}

const Current = React.createClass({
  render: function () {
    return (
      	<Table style={bodyStyle}  className="tableLanding">
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow >
              <TableHeaderColumn style={{fontSize:46, width:"15%"}}>Chore</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:46, width:"30%"}}>Description</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:46, width:"12%"}}>Points</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:46, width:"13%"}}>Deny</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:46, width:"15%"}}>Approve</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.current.map(function(chore){
             return <Single key={chore.id} id={chore.id} name={chore.name} current={"current"} description={chore.description} value={chore.value} />
            })}
            {this.props.pending.map(function(chore){
             return <Single key={chore.id} val={this.props.value} id={chore.id} name={chore.name} pending={"pending"} description={chore.description} value={chore.value} />
            }.bind(this))}
            {this.props.complete.map(function(chore){
             return <Single key={chore.id} id={chore.id} name={chore.name} complete={"complete"} description={chore.description} value={chore.value} />
            })}
            
          </TableBody>
        </Table>
    )
  }
})



const stateToProps = function(state){
	return{
		current:state.choreReducer.current,
		pending:state.choreReducer.pending,
		complete:state.choreReducer.complete
	}
}

export default connect(stateToProps)(Current)