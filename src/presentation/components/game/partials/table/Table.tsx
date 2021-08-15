import TablePay from 'presentation/components/game/partials/table-pay/TablePay';

import 'presentation/components/game/partials/table/Table.scss';


function Table(): JSX.Element {
  return (
    <div className="table">
      <TablePay classNamePrefix={'table__pay'} />

      <div className="table__balance">
        <h1>Balance</h1>
      </div>

    </div>
  );
}

export default Table;
