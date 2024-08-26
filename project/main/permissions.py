from rest_framework.permissions import BasePermission

class AllowInvalidTokenPermission(BasePermission):
    def has_permission(self, request, view):
        auth = request.headers.get('Authorization')
        if auth is None or auth == 'Bearer null':
            return True
        # Добавьте дополнительную логику для проверки токена, если это необходимо.
        return True  # Или False, если хотите ограничить доступ