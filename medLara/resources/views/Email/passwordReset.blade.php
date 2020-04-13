@component('mail::message')
# Change Password Request 

Please click on the link below to Rest your password.

@component('mail::button', ['url' => 'http://localhost:4200/response-password-reset?'])

Reset Password

@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
