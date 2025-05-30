export const Table = ({ isActive }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="16px"
        viewBox="0 -960 960 960"
        width="16px"
        fill={isActive ? "#fff" : "#0d6efd"}
    >
        <path d="M216-144q-33 0-52.5-19.5T144-216v-528q0-33 19.5-52.5T216-816h528q33 0 52.5 19.5T816-744v528q0 33-19.5 52.5T744-144H216Zm228-228H216v156h228v-156Zm72 0v156h228v-156H516Zm-72-72v-156H216v156h228Zm72 0h228v-156H516v156ZM216-672h528v-72H216v72Z" />
    </svg>
);
