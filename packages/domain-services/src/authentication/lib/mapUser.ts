const transformRoles = (roles: string) => {
  return roles.split(',').map(role => role.trim());
};

interface IUser {
  activated: boolean;
  allowMePasswordChange: boolean;
  company: string;
  id: string;
  metadata: any;
  name: string;
  roles: string;
}

export default (user: IUser) => {
  const {
    activated,
    allowMePasswordChange,
    company,
    id,
    metadata,
    name,
    roles,
  } = user;

  const userRoles = roles ? transformRoles(roles) : [];

  return {
    activated,
    allowMePasswordChange,
    company,
    loggedInDateTime: new Date(),
    metadata,
    name,
    roles: userRoles,
    username: id,
  };
};
