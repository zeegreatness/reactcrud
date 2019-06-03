// API: https://github.com/tannerlinsley/react-table/tree/v6
// SOURCE: https://jsbin.com/xabutim/edit?html,output

class Table extends React.Component{
	constructor () {
		super();

		this.state = {
			tableData: [],
		};
	}

	async componentDidMount () {
		await axios.get('rest/model.php?method=show', {
			responseType: 'json'
		}).then(response => {
			this.setState({ tableData: response.data });
			// console.log(this.state.tableData)
		});
	}

	editName = (id) => {
		console.log(id);
	}
	
	render () {
		const { tableData } = this.state;

		return (
			<div>
				<div className={"container"}>
					<div className={"row"}>
						<div className={"col-xl-12"}>
						<ReactTable
							className={"table -highlight table-bordered table-hover"}
							defaultPageSize={10}
							filterable={true}
							data={tableData}
							columns={[{
									Header: 'Basic Details',
									columns: [
										{
											Header: 'Firstname',
											accessor: 'firstname',
										},{
											Header: 'Lastname',
											id: 'lastname',
											accessor: d => d.lastname,
										},{
											Header: 'Action',
											accessor: 'id',
											Cell: ({value}) => (<button className={"btn btn-info"} onClick={()=>{this.editName(value)}}>Edit</button>)
										},
									],
								}]}
						/>
						</div>
					</div>
				</div>
			</div>);
	}
}
export default Table;
