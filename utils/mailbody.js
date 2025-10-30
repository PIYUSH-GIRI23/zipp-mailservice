export function getWelcomeEmailBody(createdAtISO, name, deviceInfo = null) {
    let deviceInfoHtml = '';
    
    if (deviceInfo) {
        deviceInfoHtml = `
            <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 5px; padding: 15px; margin: 15px 0;">
                <h3 style="margin-top: 0;">Account created from:</h3>
                <p><strong>Browser:</strong> ${deviceInfo.browser.name} ${deviceInfo.browser.version}</p>
                <p><strong>Operating System:</strong> ${deviceInfo.os.name} ${deviceInfo.os.version}</p>
                <p><strong>Device:</strong> ${deviceInfo.device.type !== 'Unknown' ? deviceInfo.device.type + ' - ' + deviceInfo.device.vendor + ' ' + deviceInfo.device.model : 'Desktop/Laptop'}</p>
                <p><strong>Location:</strong> ${deviceInfo.location.city !== 'Unknown' ? deviceInfo.location.city + ', ' + deviceInfo.location.country : 'Unknown location'}</p>
                <p><strong>IP Address:</strong> ${deviceInfo.ip}</p>
            </div>
        `;
    }
    
    return {
        subject: 'Welcome to Zipp!',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2>Welcome, ${name}!</h2>
                <p>We're excited to have you on board. Start exploring the features of your account today.</p>
                ${deviceInfoHtml}
                <p>Account Created At: ${new Date(createdAtISO).toLocaleString()}</p>
                <p>Best regards,<br>The Zipp Team</p>
            </div>
        `
    };
}

export function getLoginNotificationBody(timestampISO, name, deviceInfo = null) {
    let deviceInfoHtml = '';
    
    if (deviceInfo) {
        deviceInfoHtml = `
            <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 5px; padding: 15px; margin: 15px 0;">
                <h3 style="margin-top: 0;">Device Information</h3>
                <p><strong>Browser:</strong> ${deviceInfo.browser.name} ${deviceInfo.browser.version}</p>
                <p><strong>Operating System:</strong> ${deviceInfo.os.name} ${deviceInfo.os.version}</p>
                <p><strong>Device:</strong> ${deviceInfo.device.type !== 'Unknown' ? deviceInfo.device.type + ' - ' + deviceInfo.device.vendor + ' ' + deviceInfo.device.model : 'Desktop/Laptop'}</p>
                <p><strong>Location:</strong> ${deviceInfo.location.city !== 'Unknown' ? deviceInfo.location.city + ', ' + deviceInfo.location.country : 'Unknown location'}</p>
                <p><strong>IP Address:</strong> ${deviceInfo.ip}</p>
            </div>
        `;
    }
    
    return {
        subject: 'New Login Notification',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2>Hello, ${name}</h2>
                <h2>New Login Detected</h2>
                <p>We detected a login to your account.</p>
                <p><strong>Time:</strong> ${new Date(timestampISO).toLocaleString()}</p>
                ${deviceInfoHtml}
                <p>If this wasn't you, please reset your password immediately.</p>
                <p>Best regards,<br>The Zipp Security Team</p>
            </div>
        `
    };
}

export function getPasswordUpdateBody(updatedAtISO, deviceInfo = null, name) {
    let deviceInfoHtml = '';
    
    if (deviceInfo) {
        deviceInfoHtml = `
            <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 5px; padding: 15px; margin: 15px 0;">
                <h3 style="margin-top: 0;">Change initiated from:</h3>
                <p><strong>Browser:</strong> ${deviceInfo.browser.name} ${deviceInfo.browser.version}</p>
                <p><strong>Operating System:</strong> ${deviceInfo.os.name} ${deviceInfo.os.version}</p>
                <p><strong>Device:</strong> ${deviceInfo.device.type !== 'Unknown' ? deviceInfo.device.type + ' - ' + deviceInfo.device.vendor + ' ' + deviceInfo.device.model : 'Desktop/Laptop'}</p>
                <p><strong>Location:</strong> ${deviceInfo.location.city !== 'Unknown' ? deviceInfo.location.city + ', ' + deviceInfo.location.country : 'Unknown location'}</p>
                <p><strong>IP Address:</strong> ${deviceInfo.ip}</p>
            </div>
        `;
    }
    
    return {
        subject: 'Password Updated Successfully',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2>Hello, ${name}</h2>
                <h2>Password Update Confirmation</h2>
                <p>Your password was successfully updated on ${new Date(updatedAtISO).toLocaleString()}.</p>
                ${deviceInfoHtml}
                <p>If you didn't make this change, please contact our support team immediately.</p>
                <p>Best regards,<br>The Zipp Security Team</p>
            </div>
        `
    };
}

export function getUsernameUpdateBody(oldUsername, newUsername, updatedAtISO, deviceInfo = null , name) {
    let deviceInfoHtml = '';
    
    if (deviceInfo) {
        deviceInfoHtml = `
            <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 5px; padding: 15px; margin: 15px 0;">
                <h3 style="margin-top: 0;">Change initiated from:</h3>
                <p><strong>Browser:</strong> ${deviceInfo.browser.name} ${deviceInfo.browser.version}</p>
                <p><strong>Operating System:</strong> ${deviceInfo.os.name} ${deviceInfo.os.version}</p>
                <p><strong>Device:</strong> ${deviceInfo.device.type !== 'Unknown' ? deviceInfo.device.type + ' - ' + deviceInfo.device.vendor + ' ' + deviceInfo.device.model : 'Desktop/Laptop'}</p>
                <p><strong>Location:</strong> ${deviceInfo.location.city !== 'Unknown' ? deviceInfo.location.city + ', ' + deviceInfo.location.country : 'Unknown location'}</p>
                <p><strong>IP Address:</strong> ${deviceInfo.ip}</p>
            </div>
        `;
    }
        
    return {
        subject: 'Username Updated Successfully',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2>Hello, ${name}</h2>
                <h2>Username Update Confirmation</h2>
                <p>Your username was changed from <strong>${oldUsername}</strong> to <strong>${newUsername}</strong> on ${new Date(updatedAtISO).toLocaleString()}.</p>
                ${deviceInfoHtml}
                <p>If you didn't make this change, please contact our support team immediately.</p>
                <p>Best regards,<br>The Zipp Security Team</p>
            </div>
        `
    };
}

export function getPinUpdateBody(updatedAtISO, deviceInfo = null, name) {
    let deviceInfoHtml = '';
    
    if (deviceInfo) {
        deviceInfoHtml = `
            <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 5px; padding: 15px; margin: 15px 0;">
                <h3 style="margin-top: 0;">Change initiated from:</h3>
                <p><strong>Browser:</strong> ${deviceInfo.browser.name} ${deviceInfo.browser.version}</p>
                <p><strong>Operating System:</strong> ${deviceInfo.os.name} ${deviceInfo.os.version}</p>
                <p><strong>Device:</strong> ${deviceInfo.device.type !== 'Unknown' ? deviceInfo.device.type + ' - ' + deviceInfo.device.vendor + ' ' + deviceInfo.device.model : 'Desktop/Laptop'}</p>
                <p><strong>Location:</strong> ${deviceInfo.location.city !== 'Unknown' ? deviceInfo.location.city + ', ' + deviceInfo.location.country : 'Unknown location'}</p>
                <p><strong>IP Address:</strong> ${deviceInfo.ip}</p>
            </div>
        `;
    }
    
    return {
        subject: 'PIN Updated Successfully',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2>Hello, ${name}</h2>
                <h2>PIN Update Confirmation</h2>
                <p>Your PIN was successfully updated on ${new Date(updatedAtISO).toLocaleString()}.</p>
                ${deviceInfoHtml}
                <p>If you didn't make this change, please contact our support team immediately.</p>
                <p>Best regards,<br>The Zipp Security Team</p>
            </div>
        `
    };
}

export function getAccountDeleteBody(email, updatedAtISO, deviceInfo = null, name) {
    let deviceInfoHtml = '';
    
    if (deviceInfo) {
        deviceInfoHtml = `
            <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 5px; padding: 15px; margin: 15px 0;">
                <h3 style="margin-top: 0;">Deletion initiated from:</h3>
                <p><strong>Browser:</strong> ${deviceInfo.browser.name} ${deviceInfo.browser.version}</p>
                <p><strong>Operating System:</strong> ${deviceInfo.os.name} ${deviceInfo.os.version}</p>
                <p><strong>Device:</strong> ${deviceInfo.device.type !== 'Unknown' ? deviceInfo.device.type + ' - ' + deviceInfo.device.vendor + ' ' + deviceInfo.device.model : 'Desktop/Laptop'}</p>
                <p><strong>Location:</strong> ${deviceInfo.location.city !== 'Unknown' ? deviceInfo.location.city + ', ' + deviceInfo.location.country : 'Unknown location'}</p>
                <p><strong>IP Address:</strong> ${deviceInfo.ip}</p>
            </div>
        `;
    }
    
    return {
        subject: 'Account Deleted Successfully',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2>Hello, ${name}</h2>
                <h2>Account Deletion Confirmation</h2>
                <p>The account associated with email <strong>${email}</strong> was successfully deleted on ${new Date(updatedAtISO).toLocaleString()}.</p>
                ${deviceInfoHtml}
                <p>We're sorry to see you go. If this wasn't you, please contact our support team immediately.</p>
                <p>Best regards,<br>The Zipp Security Team</p>
            </div>
        `
    };
}

export function getOTPEmailBody(otp, expirySeconds, deviceInfo, generatedAtISO) {
    let deviceInfoHtml = '';
    
    if (deviceInfo) {
        deviceInfoHtml = `
            <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 5px; padding: 15px; margin: 15px 0;">
                <h3 style="margin-top: 0;">OTP requested from:</h3>
                <p><strong>Browser:</strong> ${deviceInfo.browser.name} ${deviceInfo.browser.version}</p>
                <p><strong>Operating System:</strong> ${deviceInfo.os.name} ${deviceInfo.os.version}</p>
                <p><strong>Device:</strong> ${deviceInfo.device.type !== 'Unknown' ? deviceInfo.device.type + ' - ' + deviceInfo.device.vendor + ' ' + deviceInfo.device.model : 'Desktop/Laptop'}</p>
                <p><strong>Location:</strong> ${deviceInfo.location.city !== 'Unknown' ? deviceInfo.location.city + ', ' + deviceInfo.location.country : 'Unknown location'}</p>
                <p><strong>IP Address:</strong> ${deviceInfo.ip}</p>
            </div>
        `;
    }
    
    const minutes = Math.floor(expirySeconds / 60);
    const seconds = expirySeconds % 60;
    const expiryText = seconds === 0 ? `${minutes} minute${minutes !== 1 ? 's' : ''}` : `${minutes} minute${minutes !== 1 ? 's' : ''} ${seconds} second${seconds !== 1 ? 's' : ''}`;
    
    return {
        subject: 'Your One-Time Password (OTP)',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2>Your One-Time Password</h2>
                <p>Requested at: ${new Date(generatedAtISO).toLocaleString()}</p>
                <p>Your OTP is:</p>
                <h1 style="text-align: center; letter-spacing: 5px;">${otp}</h1>
                <p>This code will expire in <strong>${expiryText}</strong>.</p>
                ${deviceInfoHtml}
                <p>If you didn't request this code, please ignore this email or contact our support team immediately.</p>
                <p>Best regards,<br>The Zipp Security Team</p>
            </div>
        `
    };
}
