import React from 'react';
import {connect} from 'react-redux'
import Single from 'ui/landing/singleView'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {lightWhite} from 'material-ui/styles/colors'
const bodyStyle={
  fontFamily:"Chalky",
  color:"white",
  fontSize:46
}

const Current = React.createClass({
  getInitialState:function(){
    return{
      startDate:null,
      endDate:null
    }
  },
  render: function () {
    return (
      	<Table style={bodyStyle}  className="tableLanding">
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow >
              <TableHeaderColumn style={{fontSize:46, width:"18%", color:lightWhite}}>Chore</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:46, width:"30%", color:lightWhite}}>Description</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:46, width:"12%", color:lightWhite}}>Points</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:46, width:"11%", color:lightWhite}}>Deny</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:46, width:"12%", color:lightWhite}}>Approve</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.current.map(function(chore){
             return <Single key={chore.id} id={chore.id} startDate={chore.startDate} endDate={chore.endDate} name={chore.name} current={"current"} description={chore.description} value={chore.value} />
            })}
            {this.props.pending.map(function(chore){
             return <Single key={chore.id} val={this.props.value} startDate={chore.startDate} endDate={chore.endDate} id={chore.id} name={chore.name} pending={"pending"} description={chore.description} value={chore.value} />
            }.bind(this))}
            {this.props.complete.map(function(chore){
             return <Single key={chore.id} id={chore.id} startDate={chore.startDate} endDate={chore.endDate} name={chore.name} complete={"complete"} description={chore.description} value={chore.value} />
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