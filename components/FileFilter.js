const statuses = ['FINISHED', 'FAILED', 'PROCESSING'];

export default ({ filterStatus, setFilterStatus }) => (
    <select value={filterStatus} onChange={(event) => setFilterStatus(event.target.value)}>
       <option value={''}>Filter status</option>
       {statuses.map((status) => (
           <option key={status} value={status}>{status}</option>
       ))}
    </select>
);
