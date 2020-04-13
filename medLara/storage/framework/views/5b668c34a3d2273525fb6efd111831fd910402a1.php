<?php $__env->startComponent('mail::message'); ?>
# Change Password Request 

Please click on the link below to Rest your password.

<?php $__env->startComponent('mail::button', ['url' => 'http://localhost:4200/response-password-reset?']); ?>

Reset Password

<?php echo $__env->renderComponent(); ?>

Thanks,<br>
<?php echo e(config('app.name')); ?>

<?php echo $__env->renderComponent(); ?>
<?php /**PATH D:\MedClin\medLara\resources\views/Email/passwordReset.blade.php ENDPATH**/ ?>