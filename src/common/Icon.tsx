import { IIcon } from "../features/Dogs/models";

export const Icon: React.FC<IIcon> = ({ icon, classes }) => {
  return <div className={classes && classes}>{icon}</div>;
};
