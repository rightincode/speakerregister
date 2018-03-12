using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using sregister_core.Interfaces;
using sregister_infrastructure.Repositorities;
using sregister_core.Models;
using System;

namespace sregister_webapi
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvcCore()
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
                .AddAuthorization()
                .AddJsonFormatters()
                .AddCors();

            services.AddHsts(options => {
                options.MaxAge = TimeSpan.FromDays(90);
                options.IncludeSubDomains = false;
                options.Preload = false;
            });

            services.AddAuthentication("Bearer").AddIdentityServerAuthentication(options => {
                options.Authority = "http://localhost:9440";
                options.RequireHttpsMetadata = false;
                options.ApiName = "sregisterAPI";
                options.LegacyAudienceValidation = true;    //temporary until token service is updated
            });

            services.AddOptions();
            services.Configure<SpeakerRegisterOptions>(Configuration.GetSection("Options"));
            
            // adding custom services
            services.AddTransient<ISpeakerRepository, SpeakerRepository>();
            services.AddTransient<IConferenceRepository, ConferenceRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());                   

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseMvc();
        }
    }
}
