<?php

namespace App\Http\Middleware;

use Closure;

class CORS
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        header('Header set Access-Control-Allow-Headers: "Origin, X-Requested-With, Content-Type, Accept"');
       
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers : Content-type, X-Auth-Token, Authorization, Origin');
        return $next($request);
    }
}
