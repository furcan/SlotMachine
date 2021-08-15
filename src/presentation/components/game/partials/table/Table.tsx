import TableBalance from 'presentation/components/game/partials/table-balance/TableBalance';
import TablePay from 'presentation/components/game/partials/table-pay/TablePay';

import 'presentation/components/game/partials/table/Table.scss';


function Table(): JSX.Element {
  return (
    <div className="table">
      <TableBalance classNamePrefix={'table__balance'} />
      <TablePay classNamePrefix={'table__pay'} />
    </div>
  );
}

export default Table;
