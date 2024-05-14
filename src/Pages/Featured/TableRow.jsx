import { Link } from "react-router-dom";
import PropType from 'prop-types'

const TableRow = ({fea}) => {
    const {_id,photo,email,name,title} = fea;
    return (
        <tr>
        <th>
           01
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
         {title}
        </td>
        <th>
          <Link to={`/details/${_id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
        </th>
      </tr>
    );
};
TableRow.propTypes={
    fea:PropType.object
}
export default TableRow;