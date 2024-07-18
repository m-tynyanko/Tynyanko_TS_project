// Возможные роли пользователя - user/moderator/admin
// Tags: Enum, Union, Type, Interface


interface userInterface {
    id: number;
    login: string;
    role: string;
}

enum UserRoles {
    admin = 'admin',
    moderator = 'moderator',
    user = 'user'
}

const user: userInterface = {
    id: 1,
    login: 'test',
    role: 'user',
  }

  
  const checkPermissionsDecorator = (roles: UserRoles) => {
    return (user: userInterface) => {
        return roles.includes(user.role);
    }
  }
  
  const checkPermission = checkPermissionsDecorator(['admin']);
  const hasPermissions = checkPermission(user);
  
  console.log(hasPermissions);