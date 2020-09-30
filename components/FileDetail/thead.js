const HeaderCell = ({ children }) => (
    <th>{children}</th>
);

const headerTitles = ['File ID', 'File name', 'Series title', 'File'];

export const THead = () => (
    <thead>
        <tr>
            {headerTitles.map(title => (
                <HeaderCell key={`title-${title}`}>{title}</HeaderCell>
            ))}
        </tr>
    </thead>
);