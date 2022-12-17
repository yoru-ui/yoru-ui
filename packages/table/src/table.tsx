import * as React from 'react';
import { IBaseTableProperties } from './table.interface';

const Table: React.FC<IBaseTableProperties> = props => {
  const { columns, fields, ...rest } = props;
  return (
    <table {...rest}>
      <thead>
        {columns.map((col, index) => (
          <td key={index}>
            {col.title} {col.sorter && <span>sorter</span>}
          </td>
        ))}
      </thead>
      <tbody>
        {fields.length > 0
          ? fields.map((row: any, index: number) => {
              return (
                <tr key={index}>
                  {columns.map((colItem, colKey) => {
                    if (colItem.render) {
                      return (
                        <td key={colKey}>
                          {colItem.selector && row
                            ? colItem.render(row[colItem.selector], row)
                            : null}
                        </td>
                      );
                    }
                    return (
                      <td key={colKey}>{colItem.selector && row ? row[colItem.selector] : null}</td>
                    );
                  })}
                </tr>
              );
            })
          : 'No data found'}
      </tbody>
    </table>
  );
};

export default Table;
