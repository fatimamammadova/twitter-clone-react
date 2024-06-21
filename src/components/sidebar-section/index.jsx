import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export const SidebarSection = ({ title, children, more=false }) => {
  return (
    <div className="border border-[#2f3336] mb-4 rounded-[16px] flex flex-col gap-2.5 text-[#e7e9ea]">
      <h5 className="px-4 py-3 text-xl font-extrabold text-[#e7e9ea] leading-6 flex items-center">
        {title}
      </h5>
      <div className="grid">{children}</div>
      {more && (
        <Link
          to={more}
          className="h-[52px] flex items-center px-4 text-[15px] text-[#1d9bf0] transition-colors hover:bg-[#ffffff08]"
        >
          Show more
        </Link>
      )}
    </div>
  );
};

SidebarSection.protoTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
