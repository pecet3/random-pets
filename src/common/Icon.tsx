export interface IIcon {
  icon: JSX.Element;
  classes?: string;
}
export const Icon: React.FC<IIcon> = ({ icon, classes }) => {
  return <div className={classes && classes}>{icon}</div>;
};
