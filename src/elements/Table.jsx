import styled from 'styled-components'
import { colors } from '../theme'

const TableElement = ({children, columns}) => {

    return (
        <TableMain>
            <Table>
                <thead>
                    <tr>
                        {
                            columns && columns.map((column, index) => (
                                <Th key={index} width={column.width} align={column.align}>{column.name}</Th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </Table>
        </TableMain>
    );
};

export default TableElement;

const TableMain = styled.div`
    overflow: auto;
    border-radius: 1rem;
    /* border: 1px solid ${colors.neutral700}; */
    background: ${colors.neutral800};
`;

const Table = styled.table`
    font-size: 12px;
    width: 100%;
    table-layout: auto;
    border-collapse: collapse;
    border-spacing: 0;

    thead {
        text-align: left;
        background: ${colors.neutral700};
    }

    th {
        font-weight: 700;
        padding: 1.5rem 2.5rem;
        color: ${colors.neutral500};

        :last-child {
            border-bottom: none;
        }
    }

    tbody tr {
        border-bottom: 1px solid ${colors.neutral700};

        :last-child {
            border-bottom: none;
        }
    }

    tbody td {
        margin: 0;
        padding: 1.5rem 2.5rem;
        color: ${colors.neutral300};
        font-weight: 500;
    }
`;

const Th = styled.th`
    width: ${props => props.width && props.width};
    text-align: ${props => props.align && props.align};
`;
