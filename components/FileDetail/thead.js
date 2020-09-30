const HeaderCell = ({ children }) => (
    <th className='border border-gray-400 px-4 py-2 text-gray-800'>{children}</th>
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