import Button from './Button';

export default ({ page, hasNext, setPage }) => (
    <ul className="flex">
        {page !== 0 &&
            <li className="mr-6" key="previous">
                <Button onClick={() => setPage(page - 1)}>
                    Previous
                </Button>
            </li>
        }
        {hasNext &&
            <li className="mr-6" key="next">
                <Button onClick={() => setPage(page + 1)}>
                    Next
                </Button>
            </li>
        }
    </ul>
);
