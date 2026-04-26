export default function AppListFooter({ footer_list_title, menu }) {
  return (
    <>
      <div className="d-flex flex-column ul-footer">
        <h2>
          <strong>{footer_list_title}</strong>
        </h2>

        <ul>
          {menu.map((el) => (
            <li className="list-footer" key={el.id}><a href="#">{el.text}</a>
              
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
