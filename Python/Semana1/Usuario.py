class Usuario:
    def __init__(self, user_id=None, username=None, password=None):
        self._user_id = user_id
        self._username = username
        self._password = password

    def __str__(self) -> str:
        return f'Usuario: {self._user_id} {self._username} {self._password}'

    @property
    def userID(self):
        return self._user_id

    @userID.setter
    def userID(self, new_user_id):
        self._user_id = new_user_id

    @property
    def username(self):
        return self._username

    @username.setter
    def username(self, new_username):
        self._username = new_username

    @property
    def password(self):
        return self._password

    @password.setter
    def password(self, new_password):
        self._password = new_password
