import ComingSoon from "../assets/icons/commingSoon.svg";
import Favorite from "../assets/icons/favourite.svg";
import NewRealesed from "../assets/icons/newRelease.svg";
import Trending from "../assets/icons/trending.svg";
import WatchLater from "../assets/icons/watchLater.svg";
const SideBar = () => {
  return (
    <div>
      <aside>
        <ul className="space-y-2">
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <img src={Trending} width="24" height="24" alt="trending" />
              <span>Trending</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img
                src={NewRealesed}
                width="24"
                height="24"
                alt="New released"
              />
              <span>New Releases</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={ComingSoon} width="24" height="24" alt="coming soon" />
              <span>Coming Soon</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={Favorite} width="24" height="24" alt="favorite" />
              <span>Favourites</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={WatchLater} width="24" height="24" alt="watch later" />
              <span>Watch Later</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default SideBar;
