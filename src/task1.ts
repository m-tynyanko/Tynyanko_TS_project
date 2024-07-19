// Возможные роли пользователя - user/moderator/admin
// Tags: Enum, Union, Type, Interface




enum UserRoles {
    admin = 'admin',
    moderator = 'moderator',
    user = 'user'
}
type Id = number | symbol;

interface userInterface {
    id: Id;
    login: string;
    role: UserRoles;
}

const user: userInterface = {
    id: 1,
    login: 'test',
    role: UserRoles.user,
  }
  
  const checkPermissionsDecorator = (roles: UserRoles[]): (user: userInterface) => boolean => {
    
    return (user: userInterface): boolean => {
        return roles.includes(user.role);
    }
  }
  
  const checkPermission = checkPermissionsDecorator([UserRoles.admin]);
  const hasPermissions = checkPermission(user);
  
  console.log(hasPermissions);