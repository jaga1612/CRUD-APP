import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div data-testid="Header" className="mui-appbar">
      <table width="100%">
        <tbody>
          <tr>
            <td className="mui--appbar-height" style={{ fontSize: "30px" }}>
              CRUD APP
            </td>
            <td className="mui--appbar-height" align="right">
              <Link
                data-testid="link"
                className="mui-btn mui-btn--primary"
                to="/"
              >
                HOME
              </Link>
              <Link
                data-testid="link"
                className="mui-btn mui-btn--primary"
                to="/create"
              >
                CREATE POST
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Header;
