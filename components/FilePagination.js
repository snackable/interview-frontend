export default ({ page, hasNext, setPage }) => (
    <ul class="flex">
        {page !== 0 &&
            <li class="mr-6" key="previous">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setPage(page - 1)}>
                    Previous
                </button>
            </li>
        }
        {hasNext &&
            <li class="mr-6" key="next">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setPage(page + 1)}>
                    Next
                </button>
            </li>
        }
    </ul>
);
